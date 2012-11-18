/*
 *  Flywheel-Node-ZeroMQ Module structure tests.
 *
 *  The following tests explore the module structure of the fw-node-zmq package.  They
 *  are intended to ensure that the module is exposing the appropriate exports, in support
 *  of v3.3 of 0MQ.
 * 
 *  Copyright 2012, Upstart Mobile, Inc.
 *
 *
 *  Author(s):  Cuyler Jones (cuyler.jones@gmail.com)
 *
*/
var zmq = require( '../' ), 
    should = require( 'should' );

describe( 'ZMQ structure', function(){
  
  describe( 'ZMQ version', function(){
    it( 'Should match the proper version', function(){
      zmq.version.should.equal( '3.3.0' );
    });
  });

  describe( 'ZMQ functions', function(){
    it( 'Should have a Context function', function(){
      zmq.Context.should.be.a( 'function' );
    });

    it( 'Should have a Socket function', function(){
      zmq.Socket.should.be.a( 'function' );
    });
  });
  
  describe( 'ZMQ supported socket types', function(){

    describe( 'ZMQ Publish/Subcribe model', function(){
      it( 'Should support a publish socket', function(){
        zmq.hasOwnProperty( 'ZMQ_PUB' );
        zmq[ 'ZMQ_PUB' ].should.equal( 1 );  
      });

      it( 'Should support a subscribe socket', function(){
        zmq.hasOwnProperty( 'ZMQ_SUB' );
        zmq[ 'ZMQ_SUB' ].should.equal( 2 );
      });

      it( 'Should support a cross publish socket', function(){
        zmq.hasOwnProperty( 'ZMQ_XPUB' );
        zmq[ 'ZMQ_XPUB' ].should.equal( -1 );
      });

      it( 'Should support a cross subscribe socket', function(){
        zmq.hasOwnProperty( 'ZMQ_XSUB' );
        zmq[ 'ZMQ_XSUB' ].should.equal( -1 );
      });

    });

    describe( 'ZMQ Request/Reply model', function(){
      it( 'Should support a request socket', function(){
        zmq.hasOwnProperty( 'ZMQ_REQ' );
        zmq[ 'ZMQ_REQ' ].should.equal( 3 );
      });

      it( 'Should support a reply socket', function(){
        zmq.hasOwnProperty( 'ZMQ_REP' );
        zmq[ 'ZMQ_REP' ].should.equal( 4 );
      });
    });

    describe( 'ZMQ Dealer model', function(){
      it( 'Should support a dealer socket', function(){
        zmq.hasOwnProperty( 'ZMQ_DEALER' );
        zmq[ 'ZMQ_DEALER' ].should.equal( 5 );
      });
    });

    describe( 'ZMQ Router model', function(){
      it( 'Should support a router socket', function(){
        zmq.hasOwnProperty( 'ZMQ_ROUTER' );
        zmq[ 'ZMQ_ROUTER' ].should.equal( 6 );
      });
    });

    describe( 'ZMQ Pipeline pattern', function(){
      it( 'Should support a push socket', function(){
        zmq.hasOwnProperty( 'ZMQ_PUSH' );
        zmq[ 'ZMQ_PUSH' ].should.equal( 8 );
      });

      it( 'Should support a pull socket', function(){
        zmq.hasOwnProperty( 'ZMQ_PULL' );
        zmq[ 'ZMQ_PULL' ].should.equal( 7 );
      });
    });

    describe( 'ZMQ Pair pattern', function(){
      it( 'Should support a pair socket', function(){
        zmq.hasOwnProperty( 'ZMQ_PAIR' );
        zmq[ 'ZMQ_PAIR' ].should.equal( 0 );
      });
    });
  }); //End socket types.

  describe( 'ZMQ supported socket options', function(){
    it( 'Should support Retrieve socket type', function(){
      zmq.hasOwnProperty( 'ZMQ_TYPE' );
      zmq[ 'ZMQ_TYPE' ].should.equal( 16 );
    });

    it( 'Should support Receive more data', function(){
      zmq.hasOwnProperty( 'ZMQ_RCVMORE' );
      zmq[ 'ZMQ_RCVMORE' ].should.equal( 13 );
    });

    it( 'Should support Retrieve high water mark for outbound messages', function(){
      zmq.hasOwnProperty( 'ZMQ_SNDHWM' );
      zmq[ 'ZMQ_SNDHWM' ].should.equal( 23 );
    });

    it( 'Should support Retrieve high water mark for inbound messages', function(){
      zmq.hasOwnProperty( 'ZMQ_RCVHWM' );
      zmq[ 'ZMQ_RCVHWM' ].should.equal( 24 );
    });

    it( 'Should support Retrieve I/O thread affinity', function(){
      zmq.hasOwnProperty( 'ZMQ_AFFINITY' );
      zmq[ 'ZMQ_AFFINITY' ].should.equal( 4 );
    });

    it( 'Should support Set socket identity', function(){
      zmq.hasOwnProperty( 'ZMQ_IDENTITY' );
      zmq[ 'ZMQ_IDENTITY' ].should.equal( 5 );
    });

    it( 'Should support Retrieve multicast data rate', function(){
      zmq.hasOwnProperty( 'ZMQ_RATE' );
      zmq[ 'ZMQ_RATE' ].should.equal( 8 );
    });

    it( 'Should support Get multicast recovery interval', function(){
      zmq.hasOwnProperty( 'ZMQ_RECOVERY_IVL' );
      zmq[ 'ZMQ_RECOVER_IVL' ].should.equal( 9 );
    });

    it( 'Should support Retrieve kernel transmit buffer size', function(){
      zmq.hasOwnProperty( 'ZMQ_SNDBUF' );
      zmq[ 'ZMQ_SNDBUF' ].should.equal( 11 );
    });

    it( 'Should support Retrieve kernal receive buffer size', function(){
      zmq.hasOwnProperty( 'ZMQ_RCVBUF' );
      zmq[ 'ZMQ_RCVBUF' ].should.equal( 12 );
    });

    it( 'Should support Retrieve linger period for socket shutdown', function(){
      zmq.hasOwnProperty( 'ZMQ_LINGER' );
      zmq[ 'ZMQ_LINGER' ].should.equal( 17 );
    });

    it( 'Should support Retrieve reconnection interval', function(){
      zmq.hasOwnProperty( 'ZMQ_RECONNECT_IVL' );
      zmq[ 'ZMQ_RECONNECT_IVL' ].should.equal( 18 );
    });

    it( 'Should support Retrieve maximum reconnection interval', function(){
      zmq.hasOwnProperty( 'ZMQ_RECONNECT_IVL_MAX' );
      zmq[ 'ZMQ_RECONNECT_IVL_MAX' ].should.equal( -1 );
    });

    it( 'Should support Retrieve maximum length of queue of outstanding connections', function(){
      zmq.hasOwnProperty( 'ZMQ_BACKLOG' );
      zmq[ 'ZMQ_BACKLOG' ].should.equal( 19 );
    });

    it( 'Should support Maximum acceptable inbound message size', function(){
      zmq.hasOwnProperty( 'ZMQ_MAXMSGSIZE' );
      zmq[ 'ZMQ_MAXMSGSIZE' ].should.equal( -1 );
    });

    it( 'Should support Maximum network hops for multicast packets', function(){
      zmq.hasOwnProperty( 'ZMQ_MULTICAST_HOPS' );
      zmq[ 'ZMQ_MULTICAST_HOPS' ].should.equal( -1 );
    });

    it( 'Should support Maximum time before a socket operation returns with EAGAIN', function(){
      zmq.hasOwnProperty( 'ZMQ_RCVTIMEO' );
      zmq[ 'ZMQ_RCVTIMEO' ].should.equal( -1 );
    });

    it( 'Should support Maximum time before a socket operation return with EAGAIN', function(){
      zmq.hasOwnProperty( 'ZMQ_SNDTIMEO' );
      zmq[ 'ZMQ_SNDTIMEO' ].should.equal( -1 );
    });

    it( 'Should support Retrieve IPv4 only socket override status', function(){
      zmq.hasOwnProperty( 'ZMQ_IPV4ONLY' );
      zmq[ 'ZMQ_IPV4ONLY' ].should.equal( -1 );
    });

    it( 'Should support Retrieve attach-on-connect valude', function(){
      zmq.hasOwnProperty( 'ZMQ_DELAY_ATTACH_ON_CONNECT' );
      zmq[ 'ZMQ_DELAY_ATTACH_ON_CONNECT' ].should.equal( -1 );
    });

    it( 'Should support Retrieve file descriptor associated with the socket', function(){
      zmq.hasOwnProperty( 'ZMQ_FD' );
      zmq[ 'ZMQ_FD' ].should.equal( -1 );
    });

    describe( 'ZMQ socket events', function(){
      it( 'Should support Retrieve socket event state', function(){
        zmq.hasOwnProperty( 'ZMQ_EVENTS' );
        zmq[ 'ZMQ_EVENTS' ].should.equal( 15 );
      });

      describe( 'ZMQ socket event flags', function(){
        it( 'Should support at least one message receipt without blocking', function(){
          zmq.hasOwnProperty( 'ZMQ_POLLIN' );
          zmq[ 'ZMQ_POLLIN' ].should.equal( 1 );
        });

        it( 'Should support at least one message send without blocking', function(){
          zmq.hasOwnProperty( 'ZMQ_POLLOUT' );
          zmq[ 'ZMQ_POLLOUT' ].should.equal( 2 );
        });
      });
    });

    it( 'Should support Retrieve last endpoint set', function(){
      zmq.hasOwnProperty( 'ZMQ_LAST_ENDPOINT' );
      zmq[ 'ZMQ_LAST_ENDPOINT' ].should.equal( -1 );
    });

    it( 'Should support TCP keep alive', function(){
      zmq.hasOwnProperty( 'ZMQ_TCP_KEEPALIVE' );
      zmq[ 'ZMQ_TCP_KEEPALIVE' ].should.equal( -1 );
    });

    it( 'Should support TCP keep alive count', function(){
      zmq.hasOwnProperty( 'ZMQ_TCP_KEEPALIVE_CNT' );
      zmq[ 'ZMQ_TCP_KEEPALIVE_CNT' ].should.equal( -1 );
    });

    it( 'Should support TCP keep alive interval', function(){
      zmq.hasOwnProperty( 'ZMQ_TCP_KEEPALIVE_INTVL' );
      zmq[ 'ZMQ_TCP_KEEPALIVE_INTVL' ].should.equal( -1 );
    });

  });//End socket options

  describe( 'ZMQ socket states', function(){
    it( 'Should support Ready state for sockets', function(){
      zmq.hasOwnProperty( 'STATE_READY' );
      zmq[ 'STATE_READY' ].should.equal( 0 );
    });

    it( 'Should support Busy state for sockets', function(){
      zmq.hasOwnProperty( 'STATE_BUSY' );
      zmq[ 'STATE_BUSY' ].should.equal( 1 );
    });

    it( 'Should support Close state for sockets', function(){
      zmq.hasOwnProperty( 'STATE_CLOSED' );
      zmq[ 'STATE_CLOSED' ].should.equal( 2 );
    });
  });

});
