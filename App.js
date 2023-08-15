
import { StyleSheet, StatusBar} from 'react-native';
import StudentsScreen  from './StudentsScreen';

export default function App() {
  return (
    <StudentsScreen/>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
