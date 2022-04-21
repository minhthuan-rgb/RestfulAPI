using RestfulAPI.Common.DAL;
using System;
using System.Linq;

namespace RestfulAPI.Common.BLL
{
    public class ISvc<R, T, C> where C : class where T : class, new() where R : IGenericRep<T>, new()
    {
        private R _rep;

        public ISvc ()
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

        public T GetItemById (int id)
        {
            return _rep.GetItemById(id);
        }

        public virtual Boolean Create (C c)
        {
            return false;
        }

        public virtual Boolean Update (C c)
        {
            return false;
        }

        public Boolean Remove (int id)
        {
            return _rep.Remove(id);
        }

        public R Rep
        {
            get { return _rep; }
            set { _rep = value; }
        }
    }
}
