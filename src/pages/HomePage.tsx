import DefaultLayout from '../layouts/DefaultLayout';
import PaintingGrid from '../components/blocks/PaintingGrid';

const HomePage = (): JSX.Element => (
  <DefaultLayout>
    <h1>Home</h1>
    <PaintingGrid width={4} height={4} />
  </DefaultLayout>
);

export default HomePage;
