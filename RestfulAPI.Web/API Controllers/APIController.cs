using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RestfulAPI.BLL.Svc;
using RestfulAPI.Common.Req;
using System;

namespace RestfulAPI.Web.API_Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class APIController : ControllerBase
    {
        private readonly FileSvc _fileSvc;
        private readonly FolderSvc _folderSvc;

        public APIController ()
        {
            _fileSvc = new FileSvc();
            _folderSvc = new FolderSvc();
        }

        [HttpGet("get-all-folders")]
        public IActionResult GetAllFolders()
        {
            var res = _folderSvc.GetAllFolders();
            return Ok(res);
        }

        [HttpGet("get-all-files")]
        public IActionResult GetAllFiles()
        {
            var res = _fileSvc.GetAllFiles();
            return Ok(res);
        }

        [HttpPost("create-folder")]
        public IActionResult CreateFolder ([FromBody] FolderReq req)
        {
            var res = _folderSvc.CreateFolder(req);
            return Ok(res);
        }

        [HttpPut("update-folder")]
        public IActionResult UpdateFolder ([FromBody] FolderReq req)
        {
            var res = _folderSvc.UpdateFolder(req);
            return Ok(res);
        }

        [HttpDelete("delete-folder")]
        public IActionResult DeleteFolder ([FromBody] int id)
        {
            var res = _folderSvc.DeleteFolder(id);
            return Ok(res);
        }

        [HttpPost("create-file")]
        public IActionResult CreateFile ([FromBody] FileReq req)
        {
            var res = _fileSvc.CreateFile(req);
            return Ok(res);
        }

        [HttpPut("update-file")]
        public IActionResult UpdateFile ([FromBody] FileReq req)
        {
            var res = _fileSvc.UpdateFile(req);
            return Ok(res);
        }

        [HttpDelete("delete-file")]
        public IActionResult DeleteFile ([FromBody] int id)
        {
            var res = _fileSvc.DeteleFile(id);
            return Ok(res);
        }
    }
}
