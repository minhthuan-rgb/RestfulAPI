using RestfulAPI.Common.Req;
using RestfulAPI.DAL.Models;

namespace RestfulAPI.BLL.Maps
{
    public partial class Mapping
    {
        public static void Map(File file, FileReq fileReq)
        {
            file.Id = fileReq.Id;
            file.Name = fileReq.Name;
            file.CreatedAt = fileReq.CreatedAt;
            file.CreatedBy = fileReq.CreatedBy;
            file.ModifiedAt = fileReq.ModifiedAt;
            file.ModifiedBy = fileReq.ModifiedBy;
            file.Extension = fileReq.Extension;
        }
    }
}
