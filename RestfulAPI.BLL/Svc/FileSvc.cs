using System;
using System.Linq;
using RestfulAPI.BLL.Maps;
using RestfulAPI.Common.BLL;
using RestfulAPI.Common.Req;
using RestfulAPI.DAL.Models;
using RestfulAPI.DAL.Rep;

namespace RestfulAPI.BLL.Svc
{
    public class FileSvc : ISvc<FileRep, File, FileReq>
    {
        #region New Version
        public override Boolean Create(FileReq file)
        {
            File temp = new File();
            Mapping.Map(temp, file);
            return Rep.Create(temp);
        }

        public override Boolean Update(FileReq file)
        {
            File temp = new File();
            Mapping.Map(temp, file);
            return Rep.Update(temp);
        }
        #endregion  


        #region Old Version
        private readonly FileRep fileRep = new FileRep();

        public File GetFileById (int id)
        {
            return fileRep.GetItemById(id);
        }

        public IQueryable<File> GetAllFiles ()
        {
            return fileRep.GetAllItems;
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
            return fileRep.Create(temp);
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

            return fileRep.Update(temp);
        }

        public Boolean RemoveFile (int id)
        {
            return fileRep.Remove(id);
        }
        #endregion
    }
}
