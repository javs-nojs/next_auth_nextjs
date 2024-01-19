'use client';

import { Card, CardContent, CardHeader, CardFooter } from '../ui/card';
import BackButton from './Back-Button';
import Header from './Header';
import Socials from './Socials';

type CardWrapperType = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

export default function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperType) {
  return (
    <Card className='w-96 shadow-md'>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardContent>
          <Socials />
        </CardContent>
      )}

      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
}
