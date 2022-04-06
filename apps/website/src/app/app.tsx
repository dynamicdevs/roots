// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="website" />
      <div className='border-4 border-black flex justify-center'>
        <h1>Hola soy panda</h1>
      </div>
      <div />
    </>
  );
}

export default App;
