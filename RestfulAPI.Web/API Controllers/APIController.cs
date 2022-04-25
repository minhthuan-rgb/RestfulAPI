using Microsoft.AspNetCore.Mvc;
using RestfulAPI.BLL.Svc;
using RestfulAPI.Common.BLL;
using RestfulAPI.Common.Req;
using RestfulAPI.DAL.Models;
using System.Threading.Tasks;

namespace RestfulAPI.Web.API_Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class APIController : ControllerBase
    {
        public APIController (IGenericSvc<Folder, FolderReq> folderSvc, IGenericSvc<File, FileReq> fileSvc)
        {
            _folderSvc = folderSvc;
            _fileSvc = fileSvc;
        }


        #region Folder
        private readonly IGenericSvc<Folder, FolderReq> _folderSvc;

        [HttpGet("get-all-folders")]
        public IActionResult GetAllFolders()
        {
            var res = _folderSvc.GetAllItems;
            return Ok(res);
        }

        [HttpPost("create-folder")]
        public async Task<IActionResult> CreateFolder([FromBody] FolderReq req)
        {
            var res = await _folderSvc.Create(req);
            return Ok(res);
        }

        [HttpPut("update-folder")]
        public async Task<IActionResult> UpdateFolder([FromBody] FolderReq req)
        {
            var res = await _folderSvc.Update(req);
            return Ok(res);
        }

        [HttpDelete("delete-folder")]
        public async Task<IActionResult> DeleteFolder([FromBody] int id)
        {
            var res = await _folderSvc.Remove(id);
            return Ok(res);
        }
        #endregion


        #region File
        private readonly IGenericSvc<File, FileReq> _fileSvc;

        [HttpGet("get-all-files")]
        public IActionResult GetAllFiles()
        {
            var res = _fileSvc.GetAllItems;
            return Ok(res);
        }

        [HttpPost("create-file")]
        public async Task<IActionResult> CreateFile([FromBody] FileReq req)
        {
            var res = await _fileSvc.Create(req);
            return Ok(res);
        }

        [HttpPut("update-file")]
        public async Task<IActionResult> UpdateFile([FromBody] FileReq req)
        {
            var res = await _fileSvc.Update(req);
            return Ok(res);
        }

        [HttpDelete("delete-file")]
        public async Task<IActionResult> DeleteFile([FromBody] int id)
        {
            var res = await _fileSvc.Remove(id);
            return Ok(res);
        }
        #endregion
    }
}
