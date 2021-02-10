<template>
    <div class="w-full h-full flex flex-col">
      <div class="w-full p-4 flex flex-col overflow-scroll">

        <div class="p-4 flex items-center">
          <input type="checkbox" v-model="includeVendorRoutes" id="includeVendorRoutes" class="form-checkbox" />
          <label class="pl-2 text-sm" for="includeVendorRoutes">Include vendor routes</label>
        </div>
        
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-scroll border-b border-gray-200 sm:rounded-lg">
              <table class="w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      URI
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Method
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th class="px-6 py-3 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr 
                  :key="`route_${index}`"
                  v-for="(route, index) in filteredRoutes">
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      {{ route.uri }}
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      <pre v-text="route.method.split('|').join('\n')" />
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      {{ route.action }}
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      {{ route.name }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


    </div>
</template>
<script lang="ts">
import PluginContextStore from './../PluginContextStore';

export default {
    data() {
      return {
        includeVendorRoutes: true,
        appNamespace: 'App\\',
        routes: [],
      }
    },
    computed: {
      filteredRoutes() {
        return this.routes.filter(route => {
          if (this.includeVendorRoutes) {
            return true;
          }

          return route.action.indexOf(this.appNamespace) === 0 ||
            route.action.indexOf(`Illuminate\\`) === 0;
        })
      },
    },
    methods: {
      async fetchRoutes() {
        try {

          let namespaceResult = await invoker.evaluate(`
            return app()->getNamespace();
          `)

          this.appNamespace = namespaceResult.data.output;

          let { data } = await invoker.evaluate(`
            \\Artisan::call('route:list', [
              '--json' => true,
            ]);

            return \\Artisan::output();
          `)

          this.routes = JSON.parse(data.output);
        } catch (err) {
          console.log(err);
          this.output = err;
        }
      }
    },

    mounted() {
      this.fetchRoutes();
    },

    activated() {
      this.fetchRoutes();
    }
}
</script>