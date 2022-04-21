using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RestfulAPI.BLL.Svc;
using RestfulAPI.Common.Req;

namespace RestfulAPI.Web.API_Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class APIController : ControllerBase
    {
        public APIController ()
        {
            _fileSvc = new FileSvc();
            _folderSvc = new FolderSvc();
        }


        #region Folder
        private readonly FolderSvc _folderSvc;

        [HttpGet("get-all-folders")]
        public IActionResult GetAllFolders()
        {
            var res = _folderSvc.GetAllItems;
            return Ok(res);
        }

        [HttpPost("create-folder")]
        public IActionResult CreateFolder([FromBody] FolderReq req)
        {
            var res = _folderSvc.Create(req);
            return Ok(res);
        }

        [HttpPut("update-folder")]
        public IActionResult UpdateFolder([FromBody] FolderReq req)
        {
            var res = _folderSvc.Update(req);
            return Ok(res);
        }

        [HttpDelete("delete-folder")]
        public IActionResult DeleteFolder([FromBody] int id)
        {
            var res = _folderSvc.Remove(id);
            return Ok(res);
        }
        #endregion


        #region File
        private readonly FileSvc _fileSvc;

        [HttpGet("get-all-files")]
        public IActionResult GetAllFiles()
        {
            var res = _fileSvc.GetAllItems;
            return Ok(res);
        }

        [HttpPost("create-file")]
        public IActionResult CreateFile([FromBody] FileReq req)
        {
            var res = _fileSvc.Create(req);
            return Ok(res);
        }

        [HttpPut("update-file")]
        public IActionResult UpdateFile([FromBody] FileReq req)
        {
            var res = _fileSvc.Update(req);
            return Ok(res);
        }

        [HttpDelete("delete-file")]
        public IActionResult DeleteFile([FromBody] int id)
        {
            var res = _fileSvc.Remove(id);
            return Ok(res);
        }
        #endregion
    }
}
