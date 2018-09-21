import { RouteComponentProps, withRouter } from 'react-router-dom'

declare module 'react-router-dom' {
  // Diff / Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
  type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T]
  type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>

  export function withRouter<P extends RouteComponentProps<any>>(
    component: React.ComponentType<P>
  ): React.ComponentClass<Omit<P, keyof RouteComponentProps<any>>>
}