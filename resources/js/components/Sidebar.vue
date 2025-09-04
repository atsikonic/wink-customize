<template>
  <div class="sidebar-wrapper">
     <div 
      v-if="isSidebarOpen" 
      class="overlay" 
      @click="closeSidebar"
    ></div>

    <!-- Toggle Button (hide when sidebar is open) -->
    <button 
      class="sidebar-toggle" 
      v-if="!isSidebarOpen"
      @click="toggleSidebar"
    >
      <i class="fa-solid fa-bars"></i> <span style="font-weight: bold; font-size: 1.17em;">Menu</span>
    </button>
    <aside class="sidebar" :class="{ open: isSidebarOpen }">
      <nav>
      <img :src="`${appUrl}/images/ATS-Logo.png`" alt="ATS" style="max-width: 100%; margin: 26px 0; height: 100px">
        <!-- Events Dropdown -->
          <div class="menu text-white">
              <!-- Dashboard -->
              <a :href="`${basePathUrl}/admin`" target="_blank"
                  class="flex items-center justify-between px-2 py-2 hover:text-blue-400" style="text-decoration: none; color: white;"
              >
                  Dashboard
              </a>
 
              <a :href="`${basePathUrl}/admin/employee/${userId}/edit`" target="_blank" v-if="userRole && ['employee', 'director'].includes(userRole)"
                  class="flex items-center justify-between px-2 py-2 hover:text-blue-400" style="text-decoration: none; color: white;"
              >
                  Account Information
              </a>

              <!-- Webiste Content -->
              <button
                  class="flex items-center justify-between w-full px-2 py-2 menu-btn hover:text-blue-400"
                  @click="toggleMenu('website-content')"
              >
                  <span>Website Content</span>
                  <span class="arrow" :class="{ open: openMenus.includes('website-content') }">
                  <i class="fa-solid fa-angle-down"></i>
                  </span>
              </button>

              <!-- Submenu -->
              <ul v-show="openMenus.includes('website-content')" class="submenu pl-4">
                <li><a :href="`${basePathUrl}/admin/frontend/pages`" target="_blank">Pages</a></li>
                <li><a :href="`${basePathUrl}/admin/upnext`" target="_blank">Up Next at ATS</a></li>
                <li><a :href="`${basePathUrl}/admin/frontend/blogs`" target="_blank">Blog Posts</a></li>
                <li><a :href="`${basePathUrl}/admin/frontend/architecture-articles`" target="_blank">Guest Insights</a></li>
                <li><a :href="`${basePathUrl}/admin/frontend/featured-blogs`" target="_blank">Featured Blogs</a></li>
                <li><a :href="`${basePathUrl}/admin/frontend/slider`" target="_blank">Rev. Slider</a></li>
                <li v-if="userRole && userRole == 'superadmin'"><a :href="`${basePathUrl}/admin/frontend/event-banner`" target="_blank">Event Banner</a></li>
                <li v-if="userRole && userRole == 'superadmin'"><a :href="`${basePathUrl}/admin/home-slider`" target="_blank">Slider Images</a></li>
                <li v-if="userRole && ['superadmin', 'director'].includes(userRole)"><a :href="`${basePathUrl}/admin/testimonials`" target="_blank">Testimonials</a></li>
                <li v-if="userRole && ['superadmin', 'director', 'employee'].includes(userRole)"><a :href="`${basePathUrl}/admin/podcast`" target="_blank">Podcast</a></li>
                <li v-if="userRole && userRole == 'superadmin'"><a :href="`${basePathUrl}/admin/publicity`" target="_blank">Publicities</a></li>
              </ul>

              <a
                  :href="`${basePathUrl}/admin/architects`" target="_blank"
                  class="flex items-center justify-between px-2 py-2 hover:text-blue-400" style="text-decoration: none; color: white;"
              >
                  Architects
              </a>

              <a :href="`${basePathUrl}/admin/manufacturers`" target="_blank"
                  class="flex items-center justify-between px-2 py-2 hover:text-blue-400" style="text-decoration: none; color: white;"
              >
                  Manufacturer
              </a>

              <!-- Events -->
              <button
                  class="flex items-center justify-between w-full px-2 py-2 menu-btn hover:text-blue-400"
                  @click="toggleMenu('events')"
              >
                  <span>Events</span>
                  <span class="arrow" :class="{ open: openMenus.includes('events') }">
                  <i class="fa-solid fa-angle-down"></i>
                  </span>
              </button>

              <!-- Submenu -->
              <ul v-show="openMenus.includes('events')" class="submenu pl-4">
                <li><a :href="`${basePathUrl}/admin/events/filter/upcoming/seminar`" target="_blank" rel="noopener noreferrer">Upcoming Seminar</a></li>
                <li><a :href="`${basePathUrl}/admin/events/filter/past/seminar`" target="_blank" rel="noopener noreferrer">Past Seminar</a></li>
                <li><a :href="`${basePathUrl}/admin/events/filter/upcoming/webinar`" target="_blank" rel="noopener noreferrer">Upcoming Webinar</a></li>
                <li><a :href="`${basePathUrl}/admin/events/filter/past/webinar`" target="_blank" rel="noopener noreferrer">Past Webinar</a></li>
                <li><a :href="`${basePathUrl}/admin/events/filter/upcoming/lunch-and-learn`" target="_blank" rel="noopener noreferrer">Upcoming L&amp;L</a></li>
                <li><a :href="`${basePathUrl}/admin/events/filter/past/lunch-and-learn`" target="_blank" rel="noopener noreferrer">Past L&amp;L</a></li>
                <li><a :href="`${basePathUrl}/admin/events/filter/upcoming/sponsorship`" target="_blank" rel="noopener noreferrer">Upcoming Sponsorship</a></li>
                <li><a :href="`${basePathUrl}/admin/events/filter/past/sponsorship`" target="_blank" rel="noopener noreferrer">Past Sponsorship</a></li>
                <li><a :href="`${basePathUrl}/admin/events`" target="_blank" rel="noopener noreferrer">All</a></li>
                <li><a :href="`${basePathUrl}/admin/events/venues`" target="_blank" rel="noopener noreferrer">Venues</a></li>
                <li><a :href="`${basePathUrl}/en/events/calender`" target="_blank" rel="noopener noreferrer">Calendar</a></li>
                <li><a :href="`${basePathUrl}/admin/qr-file`" target="_blank" rel="noopener noreferrer">Upload QR PDF</a></li>
                <li><a :href="`${basePathUrl}/admin/events/pending-registrations`" target="_blank" rel="noopener noreferrer">Pending Registration</a></li>
              </ul>

              <a
                  :href="`${basePathUrl}/admin/all-courses`" target="_blank"
                  class="flex items-center justify-between px-2 py-2 hover:text-blue-400" style="text-decoration: none; color: white;"
              >
                  Courses
              </a>

              <button
                  class="flex items-center justify-between w-full px-2 py-2 menu-btn hover:text-blue-400"
                  @click="toggleMenu('ondemand-courses')"
              >
                  <span>On-Demand Course</span>
                  <span class="arrow" :class="{ open: openMenus.includes('ondemand-courses') }">
                  <i class="fa-solid fa-angle-down"></i>
                  </span>
              </button>

              <!-- Submenu -->
              <ul v-show="openMenus.includes('ondemand-courses')" class="submenu pl-4">
                  <li><a :href="`${basePathUrl}/admin/online-courses/list`" target="_blank">Courses</a></li>
                  <li><a :href="`${basePathUrl}/admin/online-courses/featured/list`" target="_blank">Featured Courses</a></li>
                  <li><a :href="`${basePathUrl}/admin/online-courses/categories`" target="_blank">Categories</a></li>
              </ul>

              <div v-if="userRole && userRole == 'superadmin'">
                <button
                    class="flex items-center justify-between w-full px-2 py-2 menu-btn hover:text-blue-400"
                    @click="toggleMenu('products')"
                >
                    <span>Products</span>
                    <span class="arrow" :class="{ open: openMenus.includes('products') }">
                    <i class="fa-solid fa-angle-down"></i>
                    </span>
                </button>

                <!-- Submenu -->
                <ul v-show="openMenus.includes('products')" class="submenu pl-4">
                    <li><a :href="`${basePathUrl}/admin/product`" target="_blank">All Products</a></li>
                    <li><a :href="`${basePathUrl}/products/categories`" target="_blank">Categories</a></li>
                    <li><a :href="`${basePathUrl}/admin/products/brands`" target="_blank">Brands</a></li>
                </ul>

                <button
                    class="flex items-center justify-between w-full px-2 py-2 menu-btn hover:text-blue-400"
                    @click="toggleMenu('billing')"
                >
                    <span>Billing</span>
                    <span class="arrow" :class="{ open: openMenus.includes('billing') }">
                    <i class="fa-solid fa-angle-down"></i>
                    </span>
                </button>

                <!-- Submenu -->
                <ul v-show="openMenus.includes('billing')" class="submenu pl-4">
                    <li><a :href="`${basePathUrl}/admin/billing/architect`" target="_blank">Architect Billing</a></li>
                    <li><a :href="`${basePathUrl}/admin/billing/manufacturer`" target="_blank">Manufacturer Billing</a></li>
                    <li><a :href="`${basePathUrl}/admin/billing/w9-file`" target="_blank">Upload W9 PDF</a></li>
                    <li><a :href="`${basePathUrl}/admin/billing/ach-file`" target="_blank">Upload ACH PDF</a></li>
                </ul>

                <a
                    :href="`${basePathUrl}/admin/promocodes`" target="_blank"
                    class="flex items-center justify-between px-2 py-2 hover:text-blue-400" style="text-decoration: none; color: white;"
                >
                    Promocodes
                </a>
              </div>

              <a target="_blank"
                  :href="`${basePathUrl}/admin/newsletter`"
                  class="flex items-center justify-between px-2 py-2 hover:text-blue-400" style="text-decoration: none; color: white;"
              >
                  Newsletter
              </a>

              <div v-if="userRole && userRole == 'superadmin'">
                <a target="_blank"
                    :href="`${basePathUrl}/admin/membership`"
                    class="flex items-center justify-between px-2 py-2 hover:text-blue-400" style="text-decoration: none; color: white;"
                >
                    Memberships
                </a>

                <a target="_blank"
                    :href="`${basePathUrl}/admin/users`"
                    class="flex items-center justify-between px-2 py-2 hover:text-blue-400" style="text-decoration: none; color: white;"
                >
                    All Users
                </a>
              </div>

              <div v-if="userRole && ['superadmin', 'director'].includes(userRole)">
                <button
                    class="flex items-center justify-between w-full px-2 py-2 menu-btn hover:text-blue-400"
                    @click="toggleMenu('reports')"
                >
                    <span>Reports</span>
                    <span class="arrow" :class="{ open: openMenus.includes('reports') }">
                    <i class="fa-solid fa-angle-down"></i>
                    </span>
                </button>

                <!-- Submenu -->
                <ul v-show="openMenus.includes('reports')" class="submenu pl-4">
                    <li><a :href="`${basePathUrl}/admin/reports`" target="_blank">Reports</a></li>
                    <li><a :href="`${basePathUrl}/admin/ad-count`" target="_blank">Ad Clicks</a></li>
                    <li v-if="userRole && userRole == 'superadmin'"><a :href="`${basePathUrl}/admin/mail-stats`" target="_blank">Mail Statistics</a></li>
                </ul>
              </div>

              <a v-if="userRole && userRole == 'superadmin'"
                  :href="`${basePathUrl}/admin/email`" target="_blank"
                  class="flex items-center justify-between px-2 py-2 hover:text-blue-400" style="text-decoration: none; color: white;"
              >
                  Architect Email Record
              </a>

              <a
                  :href="'/'+Wink.path+'/logout'"
                  class="flex items-center justify-between px-2 py-2 hover:text-blue-400" style="text-decoration: none; color: white;"
              >
                  Logout
              </a>
          </div>

      </nav>
    </aside>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      // openMenu: null,
      openMenus: [],
      isSidebarOpen: false,
    };
  },
  methods: {
    // toggleMenu(menu) {
    //   if (this.openMenu === menu) {
    //     this.openMenu = null;
    //   } else {
    //     this.openMenu = menu;
    //   }
    // },

     toggleMenu(menu) {
      if (this.openMenus.includes(menu)) {
        // if already open, close it
        this.openMenus = this.openMenus.filter(m => m !== menu);
      } else {
        // if closed, open it
        this.openMenus.push(menu);
      }
    },

    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
  },

  computed: {
      basePathUrl() {
          return this.Wink.base_url;
      },

      userRole() {
          return this.Wink.user ? this.Wink.user.role : null;
      },

      userId() {
        return this.Wink.user ? this.Wink.user.id : null;
      },

      appUrl() {
        return this.Wink.app_url;
      }
  },
};
</script>

<style scoped>
/* .sidebar {
  width: 280px;
  min-height: 100vh;
  height: 100vh;
  overflow-y: auto;
  background-color: #002d5d; 
  color: white;
  padding: 15px;
  box-sizing: border-box;
} */

.sidebar {
  width: 280px;
  height: 100vh;
  overflow-y: auto;
  background-color: #002d5d;
  color: white;
  padding: 15px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1001;
}

/* Hide sidebar on small screens */
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }
  .sidebar.open {
    transform: translateX(0);
  }
}

/* Overlay (dark background behind sidebar) */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

/* Toggle Button */
.sidebar-toggle {
  display: none;
  position: fixed;
  top: 58px;
  left: 15px;
  color: darkslategray;
  border: none;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  z-index: 1002; /* above overlay */
  cursor: pointer;
}

@media (max-width: 768px) {
  .sidebar-toggle {
    display: block;
  }
}

.sidebar::-webkit-scrollbar {
  width: 8px;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

/* Dropdown menu */
.menu-btn {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  width: 100%;
  text-align: left;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: none; 
}

.menu-btn:focus {
  outline: none;
  box-shadow: none;
}

.menu-btn:hover {
  background: rgba(0, 0, 0, 0.1);
}

/* Arrow animation */
.arrow {
  transition: transform 0.3s ease;
}
.arrow.open {
  transform: rotate(180deg);
}

/* Submenu styling */
.submenu {
  list-style: none;
  padding-left: 20px;
  overflow: hidden;
  margin: 5px 0 0;
}

.submenu li {
  margin: 8px 0;
}

.submenu a {
  text-decoration: none;
  color: white;
  font-size: 14px;
}

.submenu a:hover {
  text-decoration: none; /* makes sure hover doesn’t add underline */
}

</style>
