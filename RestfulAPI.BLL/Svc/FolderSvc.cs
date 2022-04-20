using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace RestfulAPI.BLL.Svc
{
    using RestfulAPI.Common.Req;
    using RestfulAPI.DAL.Models;
    using RestfulAPI.DAL.Rep;

    public class FolderSvc
    {
        private readonly FolderRep folderRep = new FolderRep();

        public Folder GetFolderById (int id)
        {
            return folderRep.GetFolderById(id);
        }

        public IQueryable<Folder> GetAllFolders ()
        {
            return folderRep.GetAllFolders();
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

            return folderRep.CreateFolder(temp);
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

            return folderRep.UpdateFolder(temp);
        }

        public Boolean DeleteFolder (int id)
        {
            return folderRep.RemoveFolder(id);
        }
    }
}
