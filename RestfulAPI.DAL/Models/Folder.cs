using System;
using System.Collections.Generic;

#nullable disable

namespace RestfulAPI.DAL.Models
{
    public partial class Folder
    {
        public Folder()
        {
            InverseSubFolder = new HashSet<Folder>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedAt { get; set; }
        public string ModifiedBy { get; set; }
        public int? SubFolderId { get; set; }

        public virtual Folder SubFolder { get; set; }
        public virtual ICollection<Folder> InverseSubFolder { get; set; }
    }
}
