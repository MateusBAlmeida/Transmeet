// NestJS
import {
    ExecutionContext,
    Injectable,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  // Password
  import { AuthGuard } from '@nestjs/passport';

  // Decorators
  import { IS_PUBLIC_KEY } from '../decorators/is-public.decorator';

  // Protege todas as minhas rotas, deixando-as acessíveis apenas por autenticação
  @Injectable()
  export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private reflector: Reflector) {
      super();
    }
    
    // Utilizaçao do IsPublic para adicionar excessões em end points que podem ser acessíveis sem autenticação
    canActivate(context: ExecutionContext) {
      const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
  
      if (isPublic) {
        return true;
      }
  
      const canActivate = super.canActivate(context);
  
      if (typeof canActivate === 'boolean') {
        return canActivate;
      }
  
      return super.canActivate(context);
  
    }
  }