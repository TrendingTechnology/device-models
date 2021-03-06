import Link from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Links',
};

export const links = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="#" onClick={e => e.preventDefault()}>
      Primary Link
    </Link>
    <Link secondary href="#" onClick={e => e.preventDefault()}>
      Secondary link
    </Link>
  </StoryContainer>
);
