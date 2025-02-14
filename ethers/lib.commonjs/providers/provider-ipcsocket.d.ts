/// <reference types="node" />
import { SocketProvider } from "../../src.ts/providers/provider-socket.js";
import type { Socket } from "net";
import type { JsonRpcApiProviderOptions } from "../../src.ts/providers/provider-jsonrpc.js";
import type { Networkish } from "../../src.ts/providers/network.js";
/**
 *  An **IpcSocketProvider** connects over an IPC socket on the host
 *  which provides fast access to the node, but requires the node and
 *  the script run on the same machine.
 */
export declare class IpcSocketProvider extends SocketProvider {
    #private;
    /**
     *  The connected socket.
     */
    get socket(): Socket;
    constructor(path: string, network?: Networkish, options?: JsonRpcApiProviderOptions);
    destroy(): void;
    _write(message: string): Promise<void>;
}
//# sourceMappingURL=provider-ipcsocket.d.ts.map