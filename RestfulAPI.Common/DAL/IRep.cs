using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace RestfulAPI.Common.DAL
{
    public class IRep<C, T> : IGenericRep<T> where T : class where C : DbContext, new()
    {
        private C _context;

        public IRep()
        {
            _context = new C();
        }

        public IQueryable<T> GetAllItems
        {
            get
            {
                IQueryable<T> res = _context.Set<T>().AsNoTracking();
                return res;
            }
        }


        public virtual T GetItemById (int id)
        {
            return null;
        }

        public virtual async Task<Boolean> Create (T t)
        { 
            using (var tran = _context.Database.BeginTransaction())
            {
                try
                {
                    var res = _context.Set<T>().Add(t);
                    await _context.SaveChangesAsync();
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

        public virtual async Task<Boolean> Update (T t)
        {
            using (var tran = _context.Database.BeginTransaction())
            {
                try
                {
                    var res = _context.Set<T>().Update(t);
                    await _context.SaveChangesAsync();
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

        public async Task<Boolean> Remove (int id)
        {
            using (var tran = _context.Database.BeginTransaction())
            {
                try
                {
                    T t = GetItemById(id);
                    var res = _context.Remove(t);
                    await _context.SaveChangesAsync();
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

        public C Context
        {
            get { return _context; }
            set { _context = value; }
        }
    }
}
