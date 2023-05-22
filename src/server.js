import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://10.0.0.10:${port}`);
});
