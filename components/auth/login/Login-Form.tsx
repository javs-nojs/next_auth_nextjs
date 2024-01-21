import CardWrapper from '@/components/Wrapper/Card-Wrapper.';

export default function LoginForm() {
  return (
    <CardWrapper
      title='Sign in'
      href='/auth/register'
      changeButton="Don't have an account?"
    >
      Login-Form
    </CardWrapper>
  );
}
