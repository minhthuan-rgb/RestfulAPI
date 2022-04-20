using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace RestfulAPI.BLL.Svc
{
    using RestfulAPI.Common.Req;
    using RestfulAPI.DAL.Models;
    using RestfulAPI.DAL.Rep;

    public class FileSvc
    {
        private readonly FileRep fileRep = new FileRep();
        public File GetFileById (int id)
        {
            return fileRep.GetFileById(id);
        }

        public IQueryable<File> GetAllFiles ()
        {
            return fileRep.GetAllFiles();
        }

        public Boolean CreateFile (FileReq file)
        {
            File temp = new File
            {
                Id = file.Id,
                Name = file.Name,
                CreatedAt = file.CreatedAt,
                CreatedBy = file.CreatedBy,
                ModifiedAt = file.ModifiedAt,
                ModifiedBy = file.ModifiedBy,
                Extension = file.Extension
            };
            return fileRep.CreateFile(temp);
        }

        public Boolean UpdateFile (FileReq file)
        {
            File temp = new File
            {
                Id = file.Id,
                Name = file.Name,
                CreatedAt = file.CreatedAt,
                CreatedBy = file.CreatedBy,
                ModifiedAt = file.ModifiedAt,
                ModifiedBy = file.ModifiedBy,
                Extension = file.Extension
            };

            return fileRep.UpdateFile(temp);
        }

        public Boolean DeteleFile (int id)
        {
            return fileRep.RemoveFile(id);
        }
    }
}
