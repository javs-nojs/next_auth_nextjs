import ChangeLink from '../auth/button/Change-Link';
import Header from '../auth/header/Header';
import SocialMedia from '../auth/social-media/Social-Media';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

type CardWrapperProps = {
  children: React.ReactNode;
  title: string;
  href: string;
  changeButton: string;
};

export default function CardWrapper({
  children,
  title,
  href,
  changeButton,
}: CardWrapperProps) {
  return (
    <Card className='w-[25rem] shadow-md'>
      <CardHeader>
        <Header title={title} />
      </CardHeader>

      <CardContent>{children}</CardContent>

      <CardFooter>
        <SocialMedia />
      </CardFooter>

      <CardFooter>
        <ChangeLink href={href} label={changeButton} />
      </CardFooter>
    </Card>
  );
}
