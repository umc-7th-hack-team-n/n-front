import styled from 'styled-components';
import { HeaderAction } from '@shared/types';

interface AppBarProps {
  title?: string;
  leftHeaderAction: HeaderAction;
  rightHeaderActionArr?: HeaderAction[];
}

const AppBar = ({ title, leftHeaderAction, rightHeaderActionArr }: AppBarProps) => {
  const { icon, onClick } = leftHeaderAction;

  return (
    <Wrapper>
      <img
        src={icon}
        onClick={onClick ? onClick : undefined}
        style={{ background: 'none' }}
        alt="left-icon"
      />
      <p>{title}</p>
      <div>
        {rightHeaderActionArr?.map((action, index) => (
          <img
            key={index}
            src={action.icon}
            onClick={action.onClick}
            style={{ background: 'none' }}
            alt="right-icon"
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default AppBar;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100vw;
  max-width: 440px;
  height: 7vh;
  min-height: 54px;
  align-items: center;
  padding: 0 20px;

  img {
    flex-shrink: 0;
  }

  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    text-align: center;
  }

  div {
    display: flex;
    gap: 24px;
  }
`;
