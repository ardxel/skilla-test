import {withMui} from "./with-mui.tsx";
import {withRouter} from "./with-router.tsx";
import {withEmotion} from "./with-emotion.tsx";
import {withStore} from "./with-store.tsx";
import {withLocal} from "./with-local.tsx";

import compose from 'compose-function';

export const withProviders = compose(withRouter, withStore, withLocal, withMui, withEmotion);