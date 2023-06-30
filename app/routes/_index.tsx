import type { LoaderArgs} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";


export async function loader({ request }: LoaderArgs) {
  try {
    const { pathname } = new URL(request.url);

    if (pathname === '/' || pathname === '') {
      return redirect("/simulator");
    }
    return json({});

  } catch (error) {
    console.error(error);
    return json({});
  }
}
  