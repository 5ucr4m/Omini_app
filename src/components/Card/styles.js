import styled from 'styled-components/native';

export const Container = styled.View`
  background: #ccc;
  height: 200px;
  margin-bottom: 15px;
  border-radius: 3.5px;
`;
export const ImageCard = styled.Image`
  height: 120px;
`;
export const ContentCard = styled.View`
  height: 80px;
  background: #fff;
  width: 100%;
  border-bottom-left-radius: 3.5px;
  border-bottom-right-radius: 3.5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.View`
  padding-left: 22px;
`;
export const TitleCard = styled.Text`
  font-family: 'Helvetica-bold';
  font-size: 16px;
  color: #222;
  margin-bottom: 5px;
`;
export const MembersCard = styled.Text`
  font-family: 'Helvetica';
  font-size: 14px;
  color: #999;
`;
export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #e5556e;
  border-radius: 30px;
  margin: 0 20px;
  justify-content: center;
  align-items: center;
`;
