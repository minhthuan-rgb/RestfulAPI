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
    public class FolderSvc : ISvc<FolderRep, Folder, FolderReq>
    {
        #region New Version
        public override async Task<Boolean> Create(FolderReq folder)
        {
            Folder temp = new Folder();
            Mapping.Map(temp, folder);
            return await Rep.Create(temp);
        }

        public override async Task<Boolean> Update(FolderReq folder)
        {
            Folder temp = new Folder();
            Mapping.Map(temp, folder);

            return await Rep.Update(temp);
        }
        #endregion


        #region Old Version
        private readonly FolderRep folderRep = new FolderRep();

        public Folder GetFolderById (int id)
        {
            return folderRep.GetFolderById(id);
        }

        public IQueryable<Folder> GetAllFolders ()
        {
            return folderRep.GetAllFolders();
        }

        public async Task<Boolean> CreateFolder (FolderReq folder)
        {
            Folder temp = new Folder
            {
                Id = folder.Id,
                Name = folder.Name,
                CreatedAt = folder.CreatedAt,
                CreatedBy = folder.CreatedBy,
                ModifiedAt = folder.ModifiedAt,
                ModifiedBy = folder.ModifiedBy,
                SubFolderId = folder.SubFolderId == 0 ? null : folder.SubFolderId,
            };

            return await folderRep.CreateFolder(temp);
        }

        public async Task<Boolean> UpdateFolder(FolderReq folder)
        {
            Folder temp = new Folder
            {
                Id = folder.Id,
                Name = folder.Name,
                CreatedAt = folder.CreatedAt,
                CreatedBy = folder.CreatedBy,
                ModifiedAt = folder.ModifiedAt,
                ModifiedBy = folder.ModifiedBy,
                SubFolderId = folder.SubFolderId == 0 ? null : folder.SubFolderId,
            };

            return await folderRep.UpdateFolder(temp);
        }

        public async Task<Boolean> RemoveFolder (int id)
        {
            return await folderRep.RemoveFolder(id);
        }
        #endregion  
    }
}
