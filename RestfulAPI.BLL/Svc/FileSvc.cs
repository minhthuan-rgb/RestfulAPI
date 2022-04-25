using System;
using System.Linq;
using System.Threading.Tasks;
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
        public override async Task<Boolean> Create(FileReq file)
        {
            File temp = new File();
            Mapping.Map(temp, file);
            return await Rep.Create(temp);
        }

        public override async Task<Boolean> Update(FileReq file)
        {
            File temp = new File();
            Mapping.Map(temp, file);
            return await Rep.Update(temp);
        }
        #endregion  


        #region Old Version
        private readonly FileRep fileRep = new FileRep();

        public File GetFileById (int id)
        {
            return fileRep.GetFileById(id);
        }

        public IQueryable<File> GetAllFiles ()
        {
            return fileRep.GetAllFiles();
        }

        public async Task<Boolean> CreateFile (FileReq file)
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
            return await fileRep.CreateFile(temp);
        }

        public async Task<Boolean> UpdateFile (FileReq file)
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

            return await fileRep.UpdateFile(temp);
        }

        public async Task<Boolean> RemoveFile (int id)
        {
            return await fileRep.RemoveFile(id);
        }
        #endregion
    }
}
