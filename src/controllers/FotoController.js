import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';
import Aluno from '../models/Aluno';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { id_aluno } = req.body;

        const aluno = await Aluno.findByPk(id_aluno);

        if (!aluno) {
          return res.status(400).json({
            errors: ['Aluno não existe'],
          });
        }

        const foto = await Foto.create({ originalname, filename, id_aluno });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new FotoController();
