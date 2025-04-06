import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface UserCardProps {
  name: string;
  image: string;
  hobbies: string[];
}

export function UserCard({ name, image, hobbies }: UserCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500" />
      </CardHeader>
      <CardContent className="p-4 pt-0 text-center">
        <Avatar className="w-24 h-24 border-4 border-white -mt-12 mx-auto">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="mt-2 mb-1">{name}</CardTitle>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {hobbies.map((hobby) => (
            <Badge key={hobby} variant="secondary">
              {hobby}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
