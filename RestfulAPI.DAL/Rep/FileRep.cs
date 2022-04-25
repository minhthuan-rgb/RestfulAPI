using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RestfulAPI.Common.DAL;
using RestfulAPI.DAL.Models;

namespace RestfulAPI.DAL.Rep
{
    public class FileRep : IRep<MyDatabaseContext, File>
    {
        #region New Version
        public override File GetItemById(int id)
        {
            File res = GetAllItems.FirstOrDefault(file => file.Id == id);
            return res;
        }
        #endregion


        #region Old Version
        private readonly MyDatabaseContext mbContext = new MyDatabaseContext();

        public File GetFileById (int id)
        {
            File res = mbContext.Files.AsNoTracking().FirstOrDefault(file => file.Id == id);

            return res;
        }

        public IQueryable<File> GetAllFiles ()
        {
            IQueryable<File> res = mbContext.Files.AsNoTracking().Select(file => file);

            return res;
        } 

        public async Task<Boolean> CreateFile (File file)
        {
            using (var tran  = mbContext.Database.BeginTransaction())
            {
                try
                {
                    var t = mbContext.Files.Add(file);
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

        public async Task<Boolean> UpdateFile (File file)
        {
            using (var tran = mbContext.Database.BeginTransaction())
            {
                try
                {
                    var t = mbContext.Files.Update(file);
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

        public async Task<Boolean> RemoveFile (int id)
        {
            using (var tran = mbContext.Database.BeginTransaction())
            {
                try
                {
                    File file = GetFileById(id);
                    var t = mbContext.Files.Remove(file);
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
