import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Profile = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  );
};
