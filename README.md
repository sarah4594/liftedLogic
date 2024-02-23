# Lifted Logic Coding Assessment

## ✅ Requirements

- [x] Use the font Inter (available on Google Fonts)
- [x] The navigation bar should always stick to the top of the page.
- [x] The background image on the hero banner should have an animation of slowly zooming in and back out.
- [x] The image to the left of the “Brent Faiyaz, So Far Gone” content should automatically match the height of the content section to the right of it. Try to avoid setting a fixed height in CSS.
- [x] Buttons should have animations on hover state.
- [x] “New Releases” section should be a slider with each card (image, title, name, and short paragraph) being a slide.
- [x] “New Releases” slider should be navigable with the arrows.
- [x] Bonus: Include a full width google map in the page with a custom skin. Add a pin for Lifted Logic’s location, 7815 Floyd Street Overland Park, KS 66204

## 🚫 Do’s and Dont's

1. Please do not use a CSS framework (e.g. Bootstrap, Foundation, etc.)
2. Please use the Figma file and design stylesheet within Figma to help guide you how to style the page.
3. Use of javascript libraries to assist with functionality is okay (e.g. Slick Carousel, Magnific popup, jQuery )
4. The layout should be responsive. You can be creative and use your best judgment when determining the layout as the screen size becomes smaller.
5. Forms do not need to validate or submit. But client-side validation is cool.

## 🛠️ Installation

To install the project, first clone the repo from GitHub.

Then run:

```bash
npm install
npm run dev
```

Open your browser by clicking on the link.

## 🚀 Deployment

I've deployed the site to [Railway](https://railway.app). Since Vite builds the
app to the `/dist` folder as static files, I use [Caddy](https://caddyserver.com)
to server the files. See `Caddyfile` and `nixpacks.toml`

You can see a preview at https://liftedlogic-production-8049.up.railway.app/

## 🤓 Dev Notes

### 📚 Stack

For this assignment, I've chosen to use Vite+Vue. Vite is a development server
that enables fast development. Vue is a frontend framework typically used with
PHP/Laravel. I'm equally experienced with React and Node.js.

For styling, I've chosen Tailwind CSS. The main benefits are consistency in
design by using utility classes. Since classes are included directly in the
markup, it's also very easy to see what the layout should be without having to
refer to an external stylesheet. Finally, since the utility classes are
universal, all projects that use Tailwind are easy to understand. You can come
back to a project months later and quickly be able to make changes.

### 🗺️ Layout

The main home page layout is defined in the `App` component. I've created
separate components for each section: `Header`, `HeroImage`, `Footer`, etc.

The design calls for a max width of 1270px, so this is set at the main `<div>`.
wrapper in `App`. I've also made the layout responsive, so it will look good on
desktop as well as mobile devices.

The design calls for using the _Inter_ font from Google Fonts. Vue provides an
easy way to add fonts by using the `@fontsource/*` package.

```ts
// main.ts
import "@fontsource/inter";

// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";
export default {
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
};
```

The custom colors are also defined by extending the default theme.

```ts
// tailwind.config.js
export default {
	theme: {
		extend: {
			colors: {
				blue: {
					DEFAULT: "#001d5d",
					light: "#b8bfcf",
				},
				green: {
					DEFAULT: "#42a418",
					light: "#d8f0d0",
				},
				gray: {
					DEFAULT: "#777777",
					light: "#f6f6f6",
				},
				black: "#000000",
				white: "#ffffff",
				transparent: "transparent",
			},
		},
	},
};
```

### 👆 Header

The header is a sticky component anchored to the top of the screen. I've added
an underline indicator during hover.

It is also responsive and converts to a _hamburger_ menu at smaller screen sizes.
I use the `Disclosure` component from `@headless/ui` for the mobile menu. The
items are stacked vertically and there is a left border indicator during hover.

### 🦹 Hero Image

The hero image file is actually taller than the design calls for. I've used the
`aspect-ratio` and `cover-contain` utility classes to ensure that the image is
cropped to the proper size.

One of the requirement is for the hero image to slowly zoom in and out. To do
this, I created a custom animation in the Tailwind config.

This animation wil expand and contract the image in a nice way. Notice how I
scaled the image up. This is because the default image was already sized to fill
the available space. If I scaled the image smaller, then there would be a
visible blank area around the image. I use `overflow-clip` on the image to
ensure the image does not leak out of the container.

```ts
    animation: {
      breathe: "breathe 3s ease-in-out infinite",
    },
    keyframes: {
      breathe: {
        "0%, 100%": { transform: "scale(1.10)" },
        "50%": { transform: "scale(1)" },
      },
    },
```

### 📜 Main Content

The requirements state that the image should resize in height to match the text
automatically without specifying a set size.

I created a `flex` container with both elements using `flex-1` to evenly distribute
the space. For the image, I set `object-cover h-full w-full` so it fills the
available space, but crops the image as needed.

For the mobile layout, I stacked the content vertically and swapped the order so
the image would be below the text using `flex-col-reverse`. I also made the image
full bleed extending to the edge.

### ✨ New Releases

The requirements state that there should be a carousel that display a group of
albums. I used the `vue3-carousel` package which provides a nice component that
even supports touch swiping.

I created an array of album objects which included the title, artist, album art,
and bio. I created `@click` handlers for the next and previous buttons to
advance the slide.

The SVG images provided for the previous/next buttons were hard-coded with fill
color black. This made it difficult to change colors on hover. I inlined the SVG
image and update it to use `fill="currentColor"`. I also added a smooth color
transition as you hover over the buttons.

In the design, the center slide is in full opacity, while the others have reduced
opacity. `vue3-carousel` adds a class to the active slide. In order to show the
correct opacity, I had to add an override to the _styles.css_ file. By default
I turn down opacity on all slides, and override the active one.

I configured `vue3-carousel` for responsive breakpoints. For the mobile layout,
the slide is shown stacked vertically. I show a partial slide to hint that the
albums is swipable. I hide the prev/next buttons and replace them with the
built-in `Pagination` component that shows dots for each slide.

```css
.carousel__slide--active .opacity-40 {
	opacity: 1 !important;
}
```

### 🗺️ Google Maps

The map shows the location of the main office using a pin. I used the Google
Maps API to create the image with the proper theme.

For the mobile layout, I changed the aspect ratio to square with the location
centered.

- Go to [Google Clound Console](https://console.cloud.google.com/)
- Create a new project
- Go to [Enable APIs and Services](https://console.cloud.google.com/console.cloud.google.com/apis/library)
  and choose Maps Static API and enable it
- Go to [Keys & Credentials](https://console.cloud.google.com/console.cloud.google.com/google/maps-apis/credentials)
  and copy the Maps API key
- Go to [Map Management](https://console.cloud.google.com/google/maps-apis/studio/maps) and
  create a new Map ID
- Go to [Map Styles](https://console.cloud.google.com/google/maps-apis/studio/styles) and
  create a new Style with the appropriate colors, then link it to the Map ID
  created above
- Finally create a URL to your map with the correct parameters

`https://maps.googleapis.com/maps/api/staticmap?center={coords}&zoom=15&size={dimensions}&scale=2&maptype=roadmap&markers={marker}&key={key}&map_id={map_id}`

### 📪 Contact Form

For this assignment, the contact form does not need to POST to a backend
service. However, I will use a standard form and use HTML client validation
attributes like `required`, `minlength` and `type=email`.

For the phone and tablet layout, I converted the image to a background image
and added heavy opacity so you can still view the form. For phone, I made the
form fields vertically stacked.

### 🦶 Footer

The current design of the footer has 5 columns. For the mobile layout, I stacked
2 columns vertically.
