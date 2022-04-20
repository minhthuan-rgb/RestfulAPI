using System;
using System.Collections.Generic;
using System.Text;

namespace RestfulAPI.DAL.Rep
{
    using RestfulAPI.DAL.Models;
    using System.Linq;

    public class FolderRep
    {
        private readonly MyDatabaseContext mbContext = new MyDatabaseContext();

        public Folder GetFolderById(int id)
        {
            Folder res = mbContext.Folders.FirstOrDefault(folder => folder.Id == id);
            
            return res;
        }

        public IQueryable<Folder> GetAllFolders ()
        {
            IQueryable<Folder> res = mbContext.Folders.Select(folder => folder);
            
            return res;
        }

        public Boolean CreateFolder (Folder folder)
        {
            using (var tran = mbContext.Database.BeginTransaction())
            {
                try
                {
                    if (folder.SubFolderId == 0)
                        folder.SubFolderId = null;
                    var t = mbContext.Folders.Add(folder);
                    mbContext.SaveChanges();
                    tran.Commit();
                }
                catch (Exception ex)
                {
                    tran.Rollback();
                    Console.WriteLine(ex.StackTrace);
                    return false;
                }
            }
            return true;
        }

        public Boolean UpdateFolder (Folder folder)
        {
            using (var tran = mbContext.Database.BeginTransaction())
            {
                try
                {
                    if (folder.SubFolderId == 0)
                        folder.SubFolderId = null;
                    var t = mbContext.Folders.Update(folder);
                    mbContext.SaveChanges();
                    tran.Commit();
                }
                catch (Exception ex)
                {
                    tran.Rollback();
                    Console.WriteLine(ex.StackTrace);
                    return false;
                }
            }
            return true;
        }

        public Boolean RemoveFolder (int id)
        {
            using (var tran = mbContext.Database.BeginTransaction())
            {
                try
                {
                    Folder folder = GetFolderById(id);
                    var t = mbContext.Remove(folder);
                    mbContext.SaveChanges();
                    tran.Commit();
                }
                catch (Exception ex)
                {
                    tran.Rollback();
                    Console.WriteLine(ex.StackTrace);
                    return false;
                }
            }
            return true;
        }
    }
}
