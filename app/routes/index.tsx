import type { LoaderArgs} from "@remix-run/node";
import { redirect } from "@remix-run/node";

export async function loader({ request }: LoaderArgs) {
  try {
    const { pathname } = new URL(request.url);
    if (pathname === '/') {
      return redirect("/simulator");
    }
    return null;

  } catch (error) {
    console.error(error);
    return null;
  }
}
  