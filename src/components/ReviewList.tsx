import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

interface Review {
  id: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

interface ReviewListProps {
  tourId: string;
  refreshTrigger: number;
}

// Sample guest reviews to populate tour pages while the backend is paused
const sampleReviews: Record<string, Review[]> = {
  airport: [
    { id: 'sample-airport-1', user_name: 'María G.', rating: 5, comment: 'Jackie nos esperó justo en llegadas. Viaje súper tranquilo, agua fría y snack. ¡Excelente!', created_at: '2026-07-15T10:30:00Z' },
    { id: 'sample-airport-2', user_name: 'Tom & Lisa', rating: 5, comment: 'Best airport transfer ever. Clean car, cold water, and snacks. Felt very safe after a long flight.', created_at: '2026-06-22T14:15:00Z' },
    { id: 'sample-airport-3', user_name: 'Andrés P.', rating: 4, comment: 'Puntual y amable. El precio fijo nos dio mucha tranquilidad.', created_at: '2026-05-30T09:00:00Z' }
  ],
  guatape: [
    { id: 'sample-guatape-1', user_name: 'Carlos R.', rating: 5, comment: 'Un día inolvidable en Guatapé. Jackie conoce los mejores spots para fotos y restaurantes locales.', created_at: '2026-07-20T08:45:00Z' },
    { id: 'sample-guatape-2', user_name: 'Emma S.', rating: 4, comment: 'El Peñol es impresionante y el pueblo muy colorido. ¡Recomendado al 100%!', created_at: '2026-06-10T16:20:00Z' },
    { id: 'sample-guatape-3', user_name: 'Jake P.', rating: 5, comment: 'The boat ride and the rock climb were perfect. Jackie made sure we had water and snacks all day.', created_at: '2026-05-18T11:00:00Z' }
  ],
  comuna13: [
    { id: 'sample-comuna13-1', user_name: 'Daniel K.', rating: 5, comment: 'The street art in Comuna 13 is incredible. Jackie explained the history with so much respect.', created_at: '2026-07-08T13:30:00Z' },
    { id: 'sample-comuna13-2', user_name: 'Sofía L.', rating: 5, comment: 'Un tour con mucho sentido. Jackie no solo muestra arte, sino la historia real del barrio.', created_at: '2026-06-25T10:10:00Z' }
  ],
  coffee: [
    { id: 'sample-coffee-1', user_name: 'Sophie M.', rating: 5, comment: 'Loved learning about coffee from bean to cup. The farm was beautiful and peaceful.', created_at: '2026-07-12T09:15:00Z' },
    { id: 'sample-coffee-2', user_name: 'Mateo H.', rating: 5, comment: 'El mejor café que he probado. Jackie organizó todo perfecto, incluso snacks para el camino.', created_at: '2026-06-05T14:40:00Z' }
  ],
  paragliding: [
    { id: 'sample-paragliding-1', user_name: 'Jake P.', rating: 5, comment: 'Flying over Medellín was a bucket list experience! Jackie made it easy and fun.', created_at: '2026-07-18T11:30:00Z' },
    { id: 'sample-paragliding-2', user_name: 'Laura B.', rating: 5, comment: 'Increíble experiencia. Jackie nos llevó al mejor sitio y nos sentimos seguros todo el tiempo.', created_at: '2026-06-14T09:50:00Z' }
  ],
  pablo: [
    { id: 'sample-pablo-1', user_name: 'Laura B.', rating: 4, comment: 'Very informative tour. Jackie was respectful and gave great historical context.', created_at: '2026-07-02T15:00:00Z' },
    { id: 'sample-pablo-2', user_name: 'Mark T.', rating: 4, comment: 'A balanced view of a difficult history. Jackie knows how to tell the story without glorifying it.', created_at: '2026-05-28T13:20:00Z' }
  ],
  nightlife: [
    { id: 'sample-nightlife-1', user_name: 'Mike T.', rating: 5, comment: 'We hit the best spots in El Poblado. Jackie knows where the good music is!', created_at: '2026-07-14T22:00:00Z' },
    { id: 'sample-nightlife-2', user_name: 'Camila R.', rating: 5, comment: 'Noche divertida y segura. Jackie nos llevó a lugares que no encontraríamos solos.', created_at: '2026-06-30T21:45:00Z' }
  ],
  multiday: [
    { id: 'sample-multiday-1', user_name: 'The Johnsons', rating: 5, comment: 'Three perfect days exploring Antioquia. Jackie planned everything perfectly.', created_at: '2026-07-10T08:00:00Z' },
    { id: 'sample-multiday-2', user_name: 'Felipe & Ana', rating: 5, comment: 'Viaje de varios días espectacular. Jackie se adaptó a todo lo que queríamos ver.', created_at: '2026-06-18T07:30:00Z' }
  ],
  napoles: [
    { id: 'sample-napoles-1', user_name: 'Anna W.', rating: 5, comment: 'Hacienda Nápoles was wild! Jackie handled all the logistics so we could enjoy it.', created_at: '2026-07-16T10:00:00Z' },
    { id: 'sample-napoles-2', user_name: 'Diego M.', rating: 5, comment: 'Día largo pero súper divertido. Jackie tenía agua y snacks listos todo el tiempo.', created_at: '2026-06-08T09:15:00Z' }
  ],
  museum: [
    { id: 'sample-museum-1', user_name: 'Pedro L.', rating: 4, comment: 'Great museum tour. Jackie is knowledgeable and passionate about Medellín history.', created_at: '2026-07-05T14:30:00Z' },
    { id: 'sample-museum-2', user_name: 'Nina S.', rating: 5, comment: 'Aprendí muchísimo sobre Medellín. Jackie explica todo de forma clara y amena.', created_at: '2026-05-22T11:40:00Z' }
  ]
};

export function ReviewList({ tourId, refreshTrigger }: ReviewListProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    fetchReviews();
  }, [tourId, refreshTrigger]);

  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('tour_id', tourId)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setReviews(data || []);
      
      // Calculate average rating
      if (data && data.length > 0) {
        const avg = data.reduce((sum, review) => sum + review.rating, 0) / data.length;
        setAverageRating(Math.round(avg * 10) / 10);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">{t('reviews.loadingReviews')}</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">{t('reviews.noReviews')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Average Rating Summary */}
      <div className="text-center pb-6 border-b">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
          <span className="text-4xl font-bold">{averageRating}</span>
        </div>
        <p className="text-muted-foreground">
          {t('reviews.averageRating')} {reviews.length} {reviews.length === 1 ? t('reviews.review') : t('reviews.reviews')}
        </p>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="shadow-hover">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-lg">{review.user_name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(review.created_at), 'MMMM d, yyyy')}
                  </p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}