using Microsoft.Extensions.DependencyInjection;
using RestfulAPI.Common.DAL;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace RestfulAPI.Common.BLL
{
    public class ISvc<R, T, C> : IGenericSvc<T, C> where C : class where T : class, new() where R : IGenericRep<T>, new()
    {
        private R _rep;

        public ISvc()
        {
            _rep = new R();
        }

        public IQueryable<T> GetAllItems
        {
            get
            {
                IQueryable<T> res = _rep.GetAllItems;
                return res;
            }
        }

        public T GetItemById(int id)
        {
            return _rep.GetItemById(id);
        }

        public virtual Task<Boolean> Create(C c)
        {
            return Task.FromResult(false);
        }

        public virtual Task<Boolean> Update(C c)
        {
            return Task.FromResult(false);
        }

        public async Task<Boolean> Remove(int id)
        {
            return await _rep.Remove(id);
        }

        public R Rep
        {
            get { return _rep; }
            set { _rep = value; }
        }
    }
}
