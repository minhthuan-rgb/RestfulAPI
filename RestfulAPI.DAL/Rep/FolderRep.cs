using System;
using RestfulAPI.Common.DAL;
using RestfulAPI.DAL.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

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
        #endregion


        #region Old Version
        private readonly MyDatabaseContext mbContext = new MyDatabaseContext();

        public Folder GetFolderById(int id)
        {
            Folder res = mbContext.Folders.AsNoTracking().FirstOrDefault(folder => folder.Id == id);

            return res;
        }

        public IQueryable<Folder> GetAllFolders()
        {
            IQueryable<Folder> res = mbContext.Folders.AsNoTracking().Select(folder => folder);

            return res;
        }

        public async Task<Boolean> CreateFolder(Folder folder)
        {
            using (var tran = mbContext.Database.BeginTransaction())
            {
                try
                {
                    var t = mbContext.Folders.Add(folder);
                    await mbContext.SaveChangesAsync();
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

        public async Task<Boolean> UpdateFolder(Folder folder)
        {
            using (var tran = mbContext.Database.BeginTransaction())
            {
                try
                {
                    var t = mbContext.Folders.Update(folder);
                    await mbContext.SaveChangesAsync();
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

        public async Task<Boolean> RemoveFolder(int id)
        {
            using (var tran = mbContext.Database.BeginTransaction())
            {
                try
                {
                    Folder folder = GetFolderById(id);
                    var t = mbContext.Remove(folder);
                    await mbContext.SaveChangesAsync();
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
