import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import [FTName], { [FTName]T } from './[FTName]';

Enzyme.configure({ adapter: new Adapter() });

describe('<[FTName] /> component', () => {
  let wrapper: Enzyme.ShallowWrapper;
  let props: [FTName]T;

  beforeEach(() => {
    props = {};
    wrapper = shallow(<[FTName] {...props} />);
  });

  it('Must render a <[FTName] /> ', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
