namespace RestfulAPI.Common.Req
{
    public class FileReq
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedAt { get; set; }
        public string ModifiedBy { get; set; }
        public string Extension { get; set; }
    }
}
