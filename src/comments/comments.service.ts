import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './schemas/comment.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) { }
  create(createCommentDto: CreateCommentDto) {
    const createdComment = this.commentModel.create({
      text: createCommentDto.text,
      parent: createCommentDto.parentId || null,
      user: createCommentDto.userId
    })
    return createdComment;
  }

  findAll() {
    return this.commentModel.find().populate(['user']).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
