using System;
using System.Linq;
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
        public override Boolean Create(FolderReq folder)
        {
            Folder temp = new Folder();
            Mapping.Map(temp, folder);
            return Rep.Create(temp);
        }

        public override bool Update(FolderReq folder)
        {
            Folder temp = new Folder();
            Mapping.Map(temp, folder);

            return Rep.Update(temp);
        }
        #endregion


        #region Old Version
        private readonly FolderRep folderRep = new FolderRep();

        public Folder GetFolderById (int id)
        {
            return folderRep.GetItemById(id);
        }

        public IQueryable<Folder> GetAllFolders ()
        {
            return folderRep.GetAllItems;
        }

        public Boolean CreateFolder (FolderReq folder)
        {
            Folder temp = new Folder
            {
                Id = folder.Id,
                Name = folder.Name,
                CreatedAt = folder.CreatedAt,
                CreatedBy = folder.CreatedBy,
                ModifiedAt = folder.ModifiedAt,
                ModifiedBy = folder.ModifiedBy,
                SubFolderId = folder.SubFolderId
            };

            return folderRep.Create(temp);
        }

        public Boolean UpdateFolder(FolderReq folder)
        {
            Folder temp = new Folder
            {
                Id = folder.Id,
                Name = folder.Name,
                CreatedAt = folder.CreatedAt,
                CreatedBy = folder.CreatedBy,
                ModifiedAt = folder.ModifiedAt,
                ModifiedBy = folder.ModifiedBy,
                SubFolderId = folder.SubFolderId
            };

            return folderRep.Update(temp);
        }

        public Boolean RemoveFolder (int id)
        {
            return folderRep.Remove(id);
        }
        #endregion  
    }
}
