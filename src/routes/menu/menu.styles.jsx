import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg'

export const MenuContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100px;
  width: 100px;
  padding-left: 10px;
`;

export const LogImg = styled(Logo)`
  height: 100px;
  width: 100px;
`;

export const MenuLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
