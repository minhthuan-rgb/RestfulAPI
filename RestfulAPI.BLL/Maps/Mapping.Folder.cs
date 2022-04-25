using RestfulAPI.Common.Req;
using RestfulAPI.DAL.Models;

namespace RestfulAPI.BLL.Maps
{
    public partial class Mapping
    {
        public static void Map(Folder folder, FolderReq folderReq)
        {
            folder.Id = folderReq.Id;
            folder.Name = folderReq.Name;
            folder.CreatedAt = folderReq.CreatedAt;
            folder.CreatedBy = folderReq.CreatedBy;
            folder.ModifiedAt = folderReq.ModifiedAt;
            folder.ModifiedBy = folderReq.ModifiedBy;
            folder.SubFolderId = folderReq.SubFolderId == 0 ? null : folderReq.SubFolderId;
        }
    }
}
