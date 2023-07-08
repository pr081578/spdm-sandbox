import Container from '@components/commons/Container';

const Vehicles = () => {
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
      >
        Vehicles
      </div>
    </Container>
  );
};

export default Vehicles;
