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

        private string loader = "DynamicLoader.load";
        public async Task<string> LoadAsset(string url)
        {
            var result = await JSRuntime.InvokeAsync<string>(loader, url);
            return result;
        }
    }
}