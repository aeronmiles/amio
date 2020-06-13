using System.Threading.Tasks;
using Microsoft.JSInterop;

namespace am.io
{

    public class DynamicLoader
    {
        private readonly IJSRuntime JSRuntime;

        public DynamicLoader(IJSRuntime jsRuntime)
        {
            JSRuntime = jsRuntime;
        }

        private string jsLoader = "DynamicLoader.loadAsset";
        public async Task<string> LoadAsset(string url, string type)
        {
            var result = await JSRuntime.InvokeAsync<string>(jsLoader, url, type);
            return result;
        }
    }
}