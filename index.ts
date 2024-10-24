import app from './src/app';
import { validateEnv } from './src/config/env.config';
import { connectToDB } from './src/config/mongoose'; // Import the mongoose configuration file

connectToDB()
const port = validateEnv().port || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});