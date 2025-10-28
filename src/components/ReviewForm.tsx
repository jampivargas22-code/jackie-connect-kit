import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Star } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';

interface ReviewFormProps {
  tourId: string;
  onReviewSubmitted: () => void;
}

export function ReviewForm({ tourId, onReviewSubmitted }: ReviewFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const reviewSchema = z.object({
    user_name: z.string().trim().min(1, { message: t('reviews.validation.nameRequired') }).max(100, { message: t('reviews.validation.nameMax') }),
    user_email: z.string().trim().email({ message: t('reviews.validation.emailInvalid') }).max(255, { message: t('reviews.validation.emailMax') }),
    comment: z.string().trim().min(1, { message: t('reviews.validation.commentRequired') }).max(1000, { message: t('reviews.validation.commentMax') }),
    rating: z.number().min(1).max(5)
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate input
      const validatedData = reviewSchema.parse({
        user_name: name,
        user_email: email,
        comment,
        rating
      });

      setIsSubmitting(true);

      const { error } = await supabase
        .from('reviews')
        .insert({
          tour_id: tourId,
          user_name: validatedData.user_name,
          user_email: validatedData.user_email,
          comment: validatedData.comment,
          rating: validatedData.rating
        });

      if (error) throw error;

      toast({
        title: t('reviews.toast.success'),
        description: t('reviews.toast.successDescription'),
      });

      // Reset form
      setName('');
      setEmail('');
      setComment('');
      setRating(0);
      onReviewSubmitted();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: t('reviews.toast.validationError'),
          description: error.errors[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: t('reviews.toast.error'),
          description: t('reviews.toast.errorDescription'),
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-hover">
      <CardHeader>
        <CardTitle className="text-2xl">{t('reviews.form.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="rating">{t('reviews.form.rating')} {t('reviews.form.required')}</Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">{t('reviews.form.name')} {t('reviews.form.required')}</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('reviews.form.namePlaceholder')}
              required
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t('reviews.form.email')} {t('reviews.form.required')}</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('reviews.form.emailPlaceholder')}
              required
              maxLength={255}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment">{t('reviews.form.comment')} {t('reviews.form.required')}</Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t('reviews.form.commentPlaceholder')}
              required
              maxLength={1000}
              rows={4}
            />
            <p className="text-sm text-muted-foreground">
              {comment.length}/1000 {t('reviews.form.characterCount')}
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting || rating === 0}
          >
            {isSubmitting ? t('reviews.form.submitting') : t('reviews.form.submitButton')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}