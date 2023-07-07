import Container from '@app/components/Container';
import getCurrentUser from '@app/actions/getCurrentUser';

const Home = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <div
        className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
      ></div>
    </Container>
  );
};

export default Home;
