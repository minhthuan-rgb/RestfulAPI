using System;
using RestfulAPI.Common.DAL;
using RestfulAPI.DAL.Models;
using System.Linq;

namespace RestfulAPI.DAL.Rep
{
    public class FolderRep : IRep<MyDatabaseContext, Folder>
    {
        #region New Version
        public override Folder GetItemById (int id)
        {
           Folder res = GetAllItems.FirstOrDefault(folder => folder.Id == id);
           return res;
        }

        public override Boolean Create (Folder folder)
        {
            if (folder.SubFolderId == 0)
                folder.SubFolderId = null;
            return base.Create(folder);
        }

        public override Boolean Update (Folder folder)
        {
            if (folder.SubFolderId == 0)
                folder.SubFolderId = null;
            return base.Update(folder);
        }
        #endregion


        #region Old Version
        private readonly MyDatabaseContext mbContext = new MyDatabaseContext();

        public Folder GetFolderById(int id)
        {
            Folder res = mbContext.Folders.FirstOrDefault(folder => folder.Id == id);

            return res;
        }

        public IQueryable<Folder> GetAllFolders()
        {
            IQueryable<Folder> res = mbContext.Folders.Select(folder => folder);

            return res;
        }

        public Boolean CreateFolder(Folder folder)
        {
            if (folder.SubFolderId == 0)
                folder.SubFolderId = null;
            using (var tran = mbContext.Database.BeginTransaction())
            {
                try
                {
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

        public Boolean UpdateFolder(Folder folder)
        {
            if (folder.SubFolderId == 0)
                folder.SubFolderId = null;
            using (var tran = mbContext.Database.BeginTransaction())
            {
                try
                {
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

        public Boolean RemoveFolder(int id)
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
        #endregion
    }
}
